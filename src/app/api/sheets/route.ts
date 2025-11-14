import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

console.log('=== SHEETS API LOADED ===');
console.log('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID);
console.log('GOOGLE_PRIVATE_KEY exists:', !!process.env.GOOGLE_PRIVATE_KEY);

const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: "nevo-list",
    private_key_id: "189db79c43ffdb67413788d6720765cf90c06cee",
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: "nevo-sheets-service@nevo-list.iam.gserviceaccount.com",
    client_id: "106310775655802754750",
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});



const sheets = google.sheets({ version: 'v4', auth });

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(request: NextRequest) {
  console.log('=== SHEETS API CALLED ===');
  
  try {
    // Проверяем наличие обязательных переменных
    if (!SPREADSHEET_ID) {
      console.error('MISSING GOOGLE_SHEET_ID');
      return NextResponse.json(
        { error: 'Server configuration error: Missing spreadsheet ID' },
        { status: 500 }
      );
    }

    if (!process.env.GOOGLE_PRIVATE_KEY) {
      console.error('MISSING GOOGLE_PRIVATE_KEY');
      return NextResponse.json(
        { error: 'Server configuration error: Missing private key' },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Received data:', body);
    
    const { name, phone, bot } = body;
    
    if (!name || !phone) {
      console.log('Validation failed: name or phone missing');
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    console.log('Attempting to append to sheet:', SPREADSHEET_ID);

    // Пробуем добавить данные
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Лист1!A:E', // 5 колонок
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toLocaleString('ru-RU'),
          name,
          bot || 'Не выбран',
          phone || '',
        ]],
      },
    });

    console.log('Successfully saved to sheets');
    console.log('Response:', response.data);

    return NextResponse.json({ 
      success: true, 
      message: 'Data saved successfully'
    });

  } catch (error: any) {
    console.error('=== GOOGLE SHEETS ERROR ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error details:', error.errors || error.response?.data);
    
    // Более детальная информация об ошибке
    let errorMessage = 'Failed to save data';
    if (error.code === 404) {
      errorMessage = 'Spreadsheet not found. Check the Sheet ID and sharing settings.';
    } else if (error.code === 403) {
      errorMessage = 'Access denied. Make sure the service account has editor permissions.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        code: error.code
      },
      { status: 500 }
    );
  }
}