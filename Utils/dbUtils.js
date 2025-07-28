const DB_NAME = 'SDE_SHEET_TRACKER';
const DB_VERSION = 1;
const STORE_NAMES = {
  PROBLEMS: 'problems',
  UI_STATE: 'ui_state'
};


export class IndexedDBUtils {
  constructor() {
    this.db = null;
  }

  async openDB() {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAMES.PROBLEMS)) {
          db.createObjectStore(STORE_NAMES.PROBLEMS, { keyPath: 'problemName' });
        }
        if (!db.objectStoreNames.contains(STORE_NAMES.UI_STATE)) {
          db.createObjectStore(STORE_NAMES.UI_STATE, { keyPath: 'id' });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error('IndexedDB error:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async getAllProblems() {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAMES.PROBLEMS, 'readonly');
      const store = transaction.objectStore(STORE_NAMES.PROBLEMS);
      const request = store.getAll();

      request.onsuccess = () => {
        const result = {};
        request.result.forEach(item => {
          result[item.problemName] = item.data;
        });
        resolve(result);
      };

      request.onerror = (event) => {
        console.error('Error getting all problems:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async getUIState() {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAMES.UI_STATE, 'readonly');
      const store = transaction.objectStore(STORE_NAMES.UI_STATE);
      const request = store.get('ui_state');

      request.onsuccess = () => {
        resolve(request.result ? request.result.data : null);
      };

      request.onerror = (event) => {
        console.error('Error getting UI state:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async updateProblem(problemName, data) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAMES.PROBLEMS, 'readwrite');
      const store = transaction.objectStore(STORE_NAMES.PROBLEMS);
      const request = store.put({ problemName, data });

      request.onsuccess = () => resolve();
      request.onerror = (event) => {
        console.error('Error updating problem:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async updateUIState(state) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAMES.UI_STATE, 'readwrite');
      const store = transaction.objectStore(STORE_NAMES.UI_STATE);
      const request = store.put({ id: 'ui_state', data: state });

      request.onsuccess = () => resolve();
      request.onerror = (event) => {
        console.error('Error updating UI state:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async clearAllData() {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(
        [STORE_NAMES.PROBLEMS, STORE_NAMES.UI_STATE], 
        'readwrite'
      );

      transaction.objectStore(STORE_NAMES.PROBLEMS).clear();
      transaction.objectStore(STORE_NAMES.UI_STATE).clear();

      transaction.oncomplete = () => resolve();
      transaction.onerror = (event) => {
        console.error('Error clearing data:', event.target.error);
        reject(event.target.error);
      };
    });
  }




}
