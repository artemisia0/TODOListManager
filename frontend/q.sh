curl --request POST --url http://localhost:8080/api --header 'content-type: application/json' --data '{"query":"mutation {createItem(item: {id:42, contents:\"Hiff!\"}) {id,contents}}"}'
