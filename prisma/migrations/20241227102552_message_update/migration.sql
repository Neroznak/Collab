/*
  Warnings:

  - You are about to drop the column `status` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "status",
ALTER COLUMN "reactions" SET DEFAULT '',
ALTER COLUMN "attachments" SET DEFAULT '',
ALTER COLUMN "replyToMessageId" SET DEFAULT '';
