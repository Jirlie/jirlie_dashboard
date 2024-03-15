import frappe

def get_context(context):
    context.workspace = frappe.db.sql("""select * from `tabWorkspace` where `is_hidden` = 0""",as_dict=True)
    return context