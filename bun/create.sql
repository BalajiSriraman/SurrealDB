-- Generates a table with a single row (Auto generated ID)
CREATE cats CONTENT SET age = 5, dp = null, name = 'dickson'

CREATE cats CONTENT {
    age: 5,
    dp: null,
    name:'dickson'
}

-- Generates a table with a single row (manual set ID) -- 
CREATE cats:123456 SET age = 5, dp = null, name = 'dickson'

CREATE cats:123456 CONTENT {
    age: 5,
    dp: null,
    name:'dickson'
}