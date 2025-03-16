"use client";

import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function WalletAddress() {
    const { address } = useAccount();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything on the server side
    if (!mounted) {
        return null;
    }

    return (
        <span className="mt-1 text-xs text-muted-foreground">
            {address}
        </span>
    );
}

export function useAuthCheck(requireAuth: boolean = true) {
    const { isConnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
        if (requireAuth && !isConnected) {
            router.push('/sign-in');
        }
    }, [isConnected, requireAuth, router]);

    return isConnected;
}