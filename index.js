const rp = require('request-promise-native')

const baseUrl = 'http://localhost:8083'

async function add(a, b){
  let options = {
    method: 'POST',
    uri: baseUrl+'/ec/add/',
    json: true,
    body:{ a, b },
    headers: {
      'Content-Type': 'application/json',
    }
  }

  try{
    return await rp.post(options)
  } catch (err){
    console.log('error:', err)
  }
}

async function sub(a, b){
  let options = {
    method: 'POST',
    uri: baseUrl+'/ec/sub/',
    json: true,
    body:{ a, b },
    headers: {
      'Content-Type': 'application/json',
    }
  }

  try{
    return await rp.post(options)
  } catch (err){
    console.log('error:', err)
  }
}

async function mul(v, a){
  let options = {
    method: 'POST',
    uri: baseUrl+'/ec/mul/',
    json: true,
    body:{ s:{ v }, a },
    headers: {
      'Content-Type': 'application/json',
    }
  }

  try{
    return await rp.post(options)
  } catch (err){
    console.log('ERROR:', err)
  }
}

async function baseMul(v){
  let options = {
    method: 'POST',
    uri: baseUrl+'/ec/basemul/',
    json: true,
    body:{ v },
    headers: {
      'Content-Type': 'application/json',
    }
  }

  try{
    return await rp.post(options)
  } catch (err){
    console.log('ERROR:', err)
  }
}

async function hashToPoint(t){
  let options = {
    method: 'POST',
    uri: baseUrl+'/ec/hashtopoint/',
    json: true,
    body:{ t },
    headers: {
      'Content-Type': 'application/json',
    }
  }

  try{
    return await rp.post(options)
  } catch (err){
    console.log('ERROR:', err)
  }
}

module.exports = {
  add,
  sub,
  mul,
  baseMul,
  hashToPoint
}
