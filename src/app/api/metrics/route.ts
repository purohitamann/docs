import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/backend/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    if (!payload?.event || !payload?.timestamp) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // console.log('📊 CLI Metric:', payload);

      await addDoc(collection(db, "analytics"), {
        ...payload,
        createdAt: serverTimestamp(),
      });
    return NextResponse.json({ status: 'ok' });
  } catch (err) {
    console.error('❌ Metric logging error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
