const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(fullname, password, email) values(?,?,?)`,
            [
                data.fullname,
                data.password,
                data.email
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    },
    getUsers: callBack => {
        pool.query(
            `select id, fullname, password, email from users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select id, fullname, password, email from users where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (id, callBack) => {
        pool.query(
            `update users set fullname=?, password=?, email=? where id = ?`,
            [
                data.fullname,
                data.password,
                data.email,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from users where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from users where email = ?`,
            [email],
            (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
            }
        );
    }
};