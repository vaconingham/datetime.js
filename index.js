function DateTime() {
    this.now = new Date();
    this.thisDay = now.getDate();
    this.thisMonth = now.getMonth() + 1;
    this.thisYear = now.getFullYear();
    this.monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    this.yearStart = new Date(now.getFullYear(), 0, 1);
    
    // Current Financial Year:
    this.fy = function() {
        if (this.thisMonth < 6) {
            return new Date(now.getFullYear()-1, 6, 1);
        } else {
            return new Date(now.getFullYear(), 6, 1);
        }
    }
    
    // Last Financial Year:
    this.lfy = function() {
        if (this.thisMonth < 6) {
            return new Date(now.getFullYear()-2, 6, 1);
        } else {
            return new Date(now.getFullYear()-1, 6, 1);
        }
    }
    
    // Next Financial Year:
    this.nfy = function() {
        if (this.thisMonth < 6) {
            return new Date(now.getFullYear(), 6, 1);
        } else {
            return new Date(now.getFullYear() + 1, 6, 1);
        }
    }
}
