class Milestone {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  get name() {
    return this._name;
  }
  get date() {
    return this._date;
  }

  set name(value) {
    this._name = value;
  }
  set date(value) {
    this._date = value;
  }
}

class MilestonesComponent {
  constructor(window) {
    this.storage = window.localStorage;
    this.milestones = [];
  }

  get storage() {
    return this._storage;
  }

  get milestones() {
    return this._milestones;
  }

  set storage(value) {
    this._storage = value;
  }

  set milestones(value) {
    this._milestones = value;
  }

  addMilestone(name, date) {}

  deleteMilestone(position) {}

  clearMilestones() {}

  toHTML() {
    this._milestones.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    document.getElementById('overview').innerHTML = '';
    for (let i = 0; i < this._milestones.length; i++) {
      const milestone = this._milestones[i];
      if (new Date(milestone.date) < new Date()) {
        console.log(
          'Milestone ' +
            milestone.name +
            ' at ' +
            milestone.date +
            ' was removed'
        );
        this.deleteMilestone(i);
      } else {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(
          Math.abs(
            (new Date().getTime() - new Date(milestone.date).getTime()) / oneDay
          )
        );
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item col-sm-8');
        li.appendChild(
          document.createTextNode(
            diffDays + ' days left until ' + milestone.name
          )
        );
        document.getElementById('overview').appendChild(li);
      }
    }
  }

  getMilestonesFromStorage() {}

  setMilestonesInStorage() {}

  storageEventHandler(event) {}
}

function init() {
  const milestonesComponent = new MilestonesComponent(this);
  const addButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');
  const nameText = document.getElementById('name');
  const dateText = document.getElementById('date');

  addButton.onclick = () => {};

  clearButton.onclick = () => {};

  window.addEventListener(
    'storage',
    event => {
      stickiesComponent.storageEventHandler(event);
    },
    false
  );
}

window.onload = () => {init();}
