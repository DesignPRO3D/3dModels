class Github {
  constructor() {
    this.client_id = '08f7bc0c6af2e6d7d81a';
    this.client_secret = 'b8051a9e7d32c3030a5dbdfc6147c0ac1d89665a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile, repos
    }
  }
}