const joe = {
  job_title: undefined,
  working() { return !!this.job_title },

  get job() { return this.working() ? this.job_title : 'unemployed'},
  set job(any) { this.job_title = any }
}

joe.working()
console.log('1a', joe.job == 'unemployed')
console.log('2a', joe.working() === false)
console.log('3a', joe.job_title === undefined)


const desired_job = 'software developer'
joe.job = desired_job
console.log('')
console.log('1b', joe.job === desired_job)
console.log('2b', joe.working() === true)
console.log('3b', joe.job_title === desired_job)
