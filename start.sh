surreal start --log trace --user root --pass root file:mydatabase.db

surreal start --log trace --auth memory

surreal import --conn http://localhost:8000 --user root --pass root --ns test --db test surreal-deal-v2.surql

