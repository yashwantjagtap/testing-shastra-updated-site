var IndexModel ={   
    addNewStudent :function(pool,data){
            return new Promise((resolve, reject) => {
              var query = `INSERT INTO ts_webinar_candidate(
                            wc_candidate_email_id,	
                            wc_candidate_f_name,
                            wc_candidate_institute_name,
                            wc_candidate_l_name,
                            wc_candidate_mobile_no,
                            wc_candidate_percentage
                        ) VALUES (?)`;
                var insertData = [
                    data.candidateEmailId,
                    data.candidateFName,
                    data.candidateInstituteName,
                    data.candidateLName,
                    data.candidateMobileNo,
                    data.candidatePercentage,
                ]
              pool.query(query, [insertData], function (err, result) {
                if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              });
            });
        }
}
module.exports = IndexModel;