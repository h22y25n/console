import { MENU_ID } from '@/lib/menu/config';

export const ALERT_MANAGER_ROUTE = Object.freeze({
    _NAME: MENU_ID.ALERT_MANAGER,
    ALERT: {
        _NAME: `${MENU_ID.ALERT_MANAGER}.${MENU_ID.ALERT}`,
        DETAIL: { _NAME: `${MENU_ID.ALERT_MANAGER}.${MENU_ID.ALERT}.detail` },
    },
    ESCALATION_POLICY: { _NAME: `${MENU_ID.ALERT_MANAGER}.${MENU_ID.ESCALATION_POLICY}` },
});
