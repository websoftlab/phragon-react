import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerQrCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerQrCodeIcon = React.forwardRef<SVGSVGElement, TablerQrCodeIconProps>(function TablerQrCodeIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M4 3 H7 A1 1 0 0 1 8 4 V7 A1 1 0 0 1 7 8 H4 A1 1 0 0 1 3 7 V4 A1 1 0 0 1 4 3 z" />
			<path d="M17 3 H20 A1 1 0 0 1 21 4 V7 A1 1 0 0 1 20 8 H17 A1 1 0 0 1 16 7 V4 A1 1 0 0 1 17 3 z" />
			<path d="M4 16 H7 A1 1 0 0 1 8 17 V20 A1 1 0 0 1 7 21 H4 A1 1 0 0 1 3 20 V17 A1 1 0 0 1 4 16 z" />
			<path d="M21 16h-3a2 2 0 0 0-2 2v3" />
			<path d="M21 21v.01" />
			<path d="M12 7v3a2 2 0 0 1-2 2H7" />
			<path d="M3 12h.01" />
			<path d="M12 3h.01" />
			<path d="M12 16v.01" />
			<path d="M16 12h1" />
			<path d="M21 12v.01" />
			<path d="M12 21v-1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerQrCodeIcon.displayName = "TablerQrCodeIcon";
}
