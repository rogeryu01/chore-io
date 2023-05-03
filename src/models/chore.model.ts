import UserID from UserService;

export class Chore {
    choreID?: Number;
    title?: String;
    createdBy?: UserID;
    assignedTo?: UserID;
    accepted?: boolean;
    status?: String; // (completed, overdue, in status) 
    dueDate?: Date;
    assignedDate?: Date; 
    points?: Number; 
    repeat?: String; // (never, weekly, biweekly, monthly)
}

export const choreColumns = [
    {
        key: 'choreID',
        type: 'text',
        label: 'Chore ID',
    },
    {
        key: 'title',
        type: 'text',
        label: 'Title',
    },
    {
        key: 'createdBy',
        type: 'text',
        label: 'Created By',
    },
    {
        key: 'assignedTo',
        type: 'text',
        label: 'Assigned To',
    },
    {
        key: 'accepted',
        type: 'text',
        label: 'Accepted?',
    },
    {
        key: 'status',
        type: 'text',
        label: 'Status',
    },
    {
        key: 'dueDate',
        type: 'text',
        label: 'Due Date',
    },
    {
        key: 'assignedDate',
        type: 'text',
        label: 'Assigned Date',
    },
    {
        key: 'points',
        type: 'text',
        label: 'Points',
    },
    {
        key: 'repeat',
        type: 'text',
        label: 'repeat',
    }
]