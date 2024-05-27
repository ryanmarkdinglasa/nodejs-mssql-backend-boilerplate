import { GET, ADD, DELETE, UPDATE} from '../../models/index.js'; import sql from 'mssql';
import { err_msg, success_msg, QUERY, tbl} from '../../shared/index.js';
import { department_fields, ACTION} from '../../type/index.js';
import { department_schema } from '../../schemas/index.js';
import { isPermission, generateCode, isFound, find_by_fields, isDefaultRecord } from '../../functions/index.js';

    const { Int, NVarChar, DateTime, Decimal  } = sql;

    // WORKING AS EXPECTED
    export const get_all_department = async (req, res) => {
        try {
            const crntId = req.user.user;
            if (!crntId) return res.status(400).json({ message: err_msg.e00x26}); 
            if (!await isPermission(crntId, ACTION.t006.ls)) return res.status(400).json({ message: err_msg.e00x24});
            const result = await GET.record_by_query(QUERY.q06x001);
            if (!result) return res.status(400).json({ message: err_msg.e00x23 });
            return res.status(200).json({ data: result, message: success_msg.s00x00 });
        } catch(error) {
            return res.status(500).json({ message: err_msg.e00x02 });
        }
    }; // END HERE
    // WORKING AS EXPECTED
    export const get_department = async (req, res) => {
        try {
            const { Id } = req.params, crntId = req.user.user;
            if (!crntId) return res.status(400).json({ message: err_msg.e00x26}); 
            if (!await isPermission(crntId, ACTION.t006.gt)) return res.status(400).json({ message: err_msg.e00x24});
            if (!Id) return res.status(400).json({ message: err_msg.e00x07 });
            const result = await GET.record_by_id(Id, tbl.t006);
            if (!result) return res.status(400).json({ message: err_msg.e00x05 });
            return res.status(200).json({ data: result, message: success_msg.s00x00 });
        } catch(error) {
            return res.status(500).json({ message: err_msg.e00x02 });
        }
    }; // END HERE

    // WORKING AS EXPECTED
    export const create_department = async (req, res) => {
        try {
            const { Name, Description } = req.body, code = await generateCode(tbl.t006), crntId = req.user.user, current_date = new Date().toISOString();
            if (!crntId) return res.status(400).json({ message: err_msg.e00x26}); 
            if (!await isPermission(crntId, ACTION.t006.cr8)) return res.status(400).json({ message: err_msg.e00x24});
            const { error } = department_schema.validate({ Name, Description });
            if (error) return res.status(400).json({ message: err_msg.e00x25});  
            if (await isFound(tbl.t006, ['Name'], [NVarChar(50)], [Name])) return res.status(400).json({ message: err_msg.e00x06 });
            const type = [ NVarChar(50), NVarChar(50), NVarChar(50), Int, Int, DateTime, Int, DateTime];
            const data = [ code, Name, Description, 0, crntId, current_date, null, null];
            if (!(await ADD.record(tbl.t006, department_fields, type, data))) return res.status(400).json({ message: err_msg.e00x03 });
            return res.status(200).json({ message: success_msg.s00x02 });
        } catch(error) {
            return res.status(500).json({ message: err_msg.e00x02 });
        }
    }; // END HERE
    // WORKING AS EXPECTED
    export const update_department = async (req, res) => {
        try {
            const { Name, Description } = req.body, { Id } = req.params, crntId = req.user.user, current_date = new Date().toISOString();
            if (!crntId) return res.status(400).json({ message: err_msg.e00x26}); 
            if (!await isPermission(crntId, ACTION.t006.cr8)) return res.status(400).json({ message: err_msg.e00x24});
            if (!Id) return res.status(400).json({ message: err_msg.e00x07 });
            const { error } = department_schema.validate({ Name, Description });
            if (error) return res.status(400).json({ message: err_msg.e00x25});  
            if (await isFound(tbl.t006, ['Name'], [NVarChar(50)], [Name])) return res.status(400).json({ message: err_msg.e00x06 });
            const fieldsToRemove = ['Code', 'CreatedBy', 'DateCreated', 'IsDeleted'];
            const updated_fields = department_fields.filter(field => !fieldsToRemove.includes(field));
            const type = [  NVarChar(50), NVarChar(50), Int, DateTime];
            const data = [  Name, Description, crntId, current_date];
            if (!(await UPDATE.record(Id, tbl.t006, updated_fields, type, data))) return res.status(400).json({ message: err_msg.e00x03 });
            return res.status(200).json({ message: success_msg.s00x04 });
        } catch(error) {
            return res.status(500).json({ message: err_msg.e00x02 });
        }
    }; // END HERE
     // WORKING AS EXPECTED
    export const remove_department = async (req, res) => {
        try {
            const crntId = req.user.user;
            if (!crntId) return res.status(400).json({ message: err_msg.e00x26}); 
            if (!await isPermission(crntId, ACTION.t006.rmv)) return res.status(400).json({ message: err_msg.e00x24});
            const { Id } = req.params;
            if (!Id) return res.status(400).json({ message: err_msg.e00x07 });
            if (!(await isFound(tbl.t006, ['Id'], [Int], [Id]))) return res.status(400).json({ message: err_msg.e00x05 });
            if (await isDefaultRecord(Id, tbl.t006) || await isFound(tbl.t014, ['DepartmentId'], [Int], [Id])) return res.status(400).json({ message: err_msg.e00x04});
            if (!(await DELETE.record_by_id(Id, tbl.t006))) return res.status(400).json({ message: err_msg.e00x03 });
            return res.status(200).json({ message: success_msg.s00x03 });
        } catch(error) {
            return res.status(500).json({ message: err_msg.e00x02 });
        }
    }; // END HERE

    // WORKING AS EXPECTED
    export const remove_multiple_department = async (req, res) => {
        try {
            const crntId = req.user.user, { data } = req.body, to_remove = [];
            if (!crntId) return res.status(400).json({ message: err_msg.e00x26}); 
            if (!await isPermission(crntId, ACTION.t006.rmvs)) return res.status(400).json({ message: err_msg.e00x24});
            if (!data || !Array.isArray(data) || data.length === 0) return res.status(400).json({ message: err_msg.e00x07 });
            for (let item of data) {
                const exists = await isFound(tbl.t006, ['Id'], [Int], [item.Id]);
                const isDefault = await isDefaultRecord(item.Id, tbl.t006);
                const hasTransactions = await isFound(tbl.t014, ['DepartmentId'], [Int], [item.Id]);
                if (exists  && !isDefault && !hasTransactions) to_remove.push(item.Id);
            }
            if (to_remove.length === 0) return res.status(200).json({ message: err_msg.e00x23 });
            if (!(await DELETE.record_by_ids(to_remove, tbl.t006))) return res.status(200).json({ message: err_msg.e00x03 });
            return res.status(200).json({ message: success_msg.s00x03 });
        } catch(error) {
            return res.status(500).json({ message: err_msg.e00x02 });
        }
    }; // END HERE
    // WORKING AS EXPECTED
    export const trash_department = async (req, res) => {
        try {
            const crntId = req.user.user, { Id } = req.params;
            if (!crntId) return res.status(400).json({ message: err_msg.e00x26}); 
            if (!await isPermission(crntId, ACTION.t006.rmv)) return res.status(400).json({ message: err_msg.e00x24});
            if (!Id) return res.status(400).json({ message: err_msg.e00x07 });
            if (!(await isFound(tbl.t006, ['Id'], [Int], [Id]))) return res.status(400).json({ message: err_msg.e00x05 });
            if (await isDefaultRecord(Id, tbl.t006) || await isFound(tbl.t014, ['DepartmentId'], [Int], [Id])) return res.status(400).json({ message: err_msg.e00x04});
            if (!(await UPDATE.record(Id, tbl.t006, ['IsDeleted','DeletedBy'], [Int, Int], [1, crntId]))) return res.status(400).json({ message: err_msg.e00x03 });
            return res.status(200).json({ message: success_msg.s00x09 });
        } catch(error) {
            return res.status(500).json({ message: err_msg.e00x02 });
        }
    }; // END HERE
    // WORKING AS EXPECTED
    export const trash_multiple_department = async (req, res) => {
        try {
            const crntId = req.user.user, { data } = req.body, to_move = [];
            if (!crntId) return res.status(400).json({ message: err_msg.e00x26}); 
            if (!await isPermission(crntId, ACTION.t006.rmvs)) return res.status(400).json({ message: err_msg.e00x24});
            if (!to_move) return res.status(200).json({ message:' err_msg.e00x23' });
            if (!data || !Array.isArray(data) || data.length === 0) return res.status(400).json({ message: err_msg.e00x07 });
            for (let item of data) {
                const exists = await isFound(tbl.t006, ['Id'], [Int], [item.Id]);
                const isDefault = await isDefaultRecord(item.Id, tbl.t006);
                const hasTransactions = await isFound(tbl.t012, ['ClientId'], [Int], [item.Id]);
                if (exists  && !isDefault && !hasTransactions) to_move.push(item.Id);
            }
            if (to_move.length < 1) return res.status(200).json({ message: err_msg.e00x23 });
            if (!(await UPDATE.record_by_ids(to_move, tbl.t006, ['IsDeleted', 'DeletedBy'], [Int, Int],[1, crntId]))) return res.status(200).json({ message: err_msg.e00x03 });
            return res.status(200).json({ message: success_msg.s00x09 });
        } catch(error) {
            return res.status(500).json({ message: err_msg.e00x02 });
        }
    }; // END HERE
