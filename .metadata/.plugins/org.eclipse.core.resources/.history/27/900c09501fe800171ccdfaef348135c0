package io.codeHomeProject.blogList;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface blogListRepository extends MongoRepository< blogInfo, String>, QueryDslPredicateExecutor<blogInfo> {

		blogInfo findById(String id);

}
