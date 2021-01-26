import { AuditTrail } from './AuditTrail';
export abstract class Task {
    auditTrail: AuditTrail;
    constructor(auditTrail: AuditTrail) {
        this.auditTrail = auditTrail
    }

    execute(){
        this.auditTrail.record();
        this.doExecute();
    }

    protected abstract doExecute();
}