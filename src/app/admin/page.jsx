import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth(); //session has our user and (userId) that we pass it as prop to the admin post form

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>...loading</div>}>
            <AdminPosts />
          </Suspense>
        </div>

        <div className={styles.column}>
          <AdminPostForm userId={session?.user.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <AdminUserForm />
        </div>

        <div className={styles.column}>
          <Suspense fallback={<div>...loading</div>}>
            <AdminUsers />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
