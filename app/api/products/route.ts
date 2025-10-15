import { NextResponse } from 'next/server';

import defaultProducts from '@/src/product-data';

export const GET = async () => {
  const products = await new Promise(resolve => setTimeout(() => resolve(defaultProducts), 3000));

  return NextResponse.json(products);
};