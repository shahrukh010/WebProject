

 document.querySelector('.button-container').addEventListener('click',function(){

	let text = document.getElementById('filter-jobs').value;
	getJobs().then(jobs=>{
		let filteredjobs = filteredJobs(jobs, text);
		console.log(filteredjobs);
		showJobs(filteredjobs);
	});

 })

function getJobs(){

	return fetch("js/data.json").then(response=>response.json()).then(data=>{
		return data;
	})
}

function showJobs(jobs){
	// console.log(jobs);
	let jobContainer = document.querySelector('.job-container');
	let jobsHtml ="";
	jobs.forEach(job => {

		jobsHtml +=`
		<div class="job-title">
				<div class="top">
					<img src="${job.logo}"/>
					</div>
					<div class="rolename">
						<span>${job.roleName}</span>
					</div>
					<div class="description">
						<span>${job.requirements.content}</span>
					</div>
					<div class="buttons">
						<div class="button apply-now">
							Apply Now
						</div>
						<div class="button">
							Message 
						</div>
						</div>
						</div>
						`
	});
	jobContainer.innerHTML = jobsHtml;
	//console.log(jobsHtml);
}

function filteredJobs(jobs, searchText){

	if(searchText){

		let filteredJobs = jobs.filter(jobs=>{

			if(jobs.roleName.toLowerCase().includes(searchText)||
			   jobs.type.toLowerCase().includes(searchText)||
			   jobs.requirements.content.toLowerCase().includes(searchText)||
			   jobs.company.toLowerCase().includes(searchText)){
				return true;
			}
			else
			return false;
		});
		return filteredJobs;
	}
	else
	return jobs;
}

getJobs().then(data=>{


	showJobs(data);
});
