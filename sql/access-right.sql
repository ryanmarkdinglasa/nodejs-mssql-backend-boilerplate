
INSERT [dbo].[AccessRight] ( [Code], [Name], [Description], [IsDeleted], [CreatedBy], [DateCreated], [UpdatedBy], [DateUpdated]) VALUES 
(N'000001', N'ViewRoleList',                N'View role`s list',                0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000002', N'ViewRoleDetails',             N'View role details',               0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000003', N'CreateRole',                  N'Create new role',                 0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000004', N'RemoveRole',                  N'Remove role',                     0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000005', N'RemoveMultipleRole',          N'Remove multiple roles',           0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000006', N'UpdateRole',                  N'Update role',                     0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000007', N'ViewAccessRightList',         N'View access right`s list',        0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000008', N'ViewAccessRightDetails',      N'View access right details',       0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000009', N'CreateAccessRight',           N'Create new access right',         0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000010', N'RemoveAccessRight',           N'Remove access right',             0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000011', N'RemoveMultipleAccessRight',   N'Remove multiple access rights',   0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000012', N'UpdateAccessRight',           N'Update access right',             0, 1, CAST(N'2024-05-23T00:00:00.000' AS DateTime),  null, null),
(N'000013', N'ViewClientList',              N'View client`s list',              0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime),  null, null),
(N'000014', N'ViewClientDetails',           N'View client details',             0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime),  null, null),
(N'000015', N'CreateClient',                N'Create new client',               0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime),  null, null),
(N'000016', N'RemoveClient',                N'Remove client',                   0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime),  null, null),
(N'000017', N'RemoveMultipleClient',        N'Remove multiple clients',         0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime),  null, null),
(N'000018', N'UpdateClient',                N'Update client',                   0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime),  null, null),
(N'000019', N'ViewDepartmentList',          N'View department`s list',          0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000020', N'ViewDepartmentDetails',       N'View department details',         0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000021', N'CreateDepartment',            N'Create new department',           0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000022', N'RemoveDepartment',            N'Remove department',               0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000023', N'RemoveMultipleDepartment',    N'Remove multiple department`s',    0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000024', N'UpdateDepartment',            N'Update department',               0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000025', N'ViewPermissionList',          N'View permission`s list',          0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000026', N'ViewPermissionDetail',        N'View permission details',         0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000027', N'CreatePermission',            N'Create new permission',           0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000028', N'RemovePermission',            N'Remove permission',               0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000029', N'RemoveMultiplePermission',    N'Remove multiple permission`s',    0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000030', N'UpdatePermission',            N'Update permission',               0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000031', N'ViewProductList',             N'View product`s list',             0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000032', N'ViewProductDetails',          N'View product details',            0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000033', N'CreateProduct',               N'Create new product',              0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000034', N'RemoveProduct',               N'Remove product',                  0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000035', N'RemoveMultipleProduct',       N'Remove multiple product',         0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000036', N'UpdateProduct',               N'Update product',                  0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000037', N'ViewUserList',                N'View user`s list ',               0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000038', N'ViewUserDetails',             N'View user details',               0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000039', N'CreateUser',                  N'Create new user',                 0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000040', N'RemoveUser',                  N'Remove user',                     0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000041', N'UpdateUser',                  N'Update user',                     0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000042', N'ViewTicketList',              N'View ticket list',                0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000043', N'ViewAssignedTickets',         N'View assigned tickets',           0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000044', N'ViewTicketDetails ',          N'View ticket details',             0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000045', N'CreateTicket',                N'Create new ticket',               0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000046', N'RemoveTicket',                N'Remove ticket',                   0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000047', N'RemoveMultipleTicket',        N'Remove multiple ticket',          0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000048', N'UpdateTicket',                N'Update ticket',                   0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000049', N'ViewTicketReviewList',        N'View ticket review`s list',       0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000050', N'ViewTicketReviewDetails',     N'View ticket review details',      0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000051', N'ReviewTicket',                N'Review a ticket',                 0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000052', N'RemoveTicketReview',          N'Remove ticket review',            0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000053', N'UpdateTicketReview',          N'Update ticket review',            0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000054', N'ViewAllLicenseRequest',       N'View all license request',        0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000055', N'ViewLicenseRequestDetails',   N'View license request details',    0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000056', N'CreateLicenseRequest',        N'Create new license request',      0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000057', N'RemoveLicenseRequest',        N'Remove license request',          0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000058', N'UpdateLicenseRequest',        N'Update license request',          0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000059', N'ViewAuditTrailList',          N'View audit trail list',           0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000060', N'ViewAuditTrailDetails',       N'View audit trail details',        0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000061', N'TicketSummaryReport',         N'Ticket summary report',           0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000062', N'TicketAgingReport',           N'Ticket aging report',             0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000063', N'TicketResolutionTimeReport',  N'Ticket resolution time report',   0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000064', N'CSATReport',                  N'Customer satisfaction report ',   0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000065', N'StaffPerformanceReport',      N'Staff performance report',        0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000066', N'TeamWorkloadReport',          N'Team workload report',            0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null),
(N'000067', N'TicketCategoryAnalysisReport',N'Ticket category analysis report', 0, 1, CAST(N'2024-05-24T02:48:44.463' AS DateTime), null, null);
