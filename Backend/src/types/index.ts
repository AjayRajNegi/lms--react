export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  publishedYear?: number;
  createdAt: Date;
}

export interface BookReqest {
  id: string;
  bookTitle: string;
  author: string;
  requesterName: string;
  requesterEmail: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
