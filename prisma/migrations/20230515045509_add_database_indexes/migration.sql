-- DropForeignKey
ALTER TABLE `account` DROP FOREIGN KEY `account_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `shcedulings` DROP FOREIGN KEY `shcedulings_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_time_intervals` DROP FOREIGN KEY `user_time_intervals_user_id_fkey`;

-- RenameIndex
ALTER TABLE `account` RENAME INDEX `account_user_id_fkey` TO `account_user_id_idx`;

-- RenameIndex
ALTER TABLE `sessions` RENAME INDEX `sessions_user_id_fkey` TO `sessions_user_id_idx`;

-- RenameIndex
ALTER TABLE `shcedulings` RENAME INDEX `shcedulings_user_id_fkey` TO `shcedulings_user_id_idx`;

-- RenameIndex
ALTER TABLE `user_time_intervals` RENAME INDEX `user_time_intervals_user_id_fkey` TO `user_time_intervals_user_id_idx`;
