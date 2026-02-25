#!/bin/bash

# Script untuk mengganti warna merah dengan hijau di seluruh project
# Dari #EE0000 ke #10B981 (green-500)
# Dari #CC0000 ke #059669 (green-600)
# Dari red- ke green-

find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i 's/#EE0000/#10B981/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i 's/#CC0000/#059669/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i 's/bg-red-50/bg-green-50/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i 's/bg-red-600/bg-green-600/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i 's/border-red-100/border-green-100/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i 's/border-red-500/border-green-500/g' {} +
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i 's/text-red-600/text-green-600/g' {} +

echo "Warna berhasil diganti dari merah ke hijau!"
