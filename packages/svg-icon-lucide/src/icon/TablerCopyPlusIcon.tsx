import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCopyPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCopyPlusIcon = React.forwardRef<SVGSVGElement, TablerCopyPlusIconProps>(function TablerCopyPlusIcon(
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
			<path d="M15 12 L15 18" />
			<path d="M12 15 L18 15" />
			<path d="M10 8 H20 A2 2 0 0 1 22 10 V20 A2 2 0 0 1 20 22 H10 A2 2 0 0 1 8 20 V10 A2 2 0 0 1 10 8 z" />
			<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCopyPlusIcon.displayName = "TablerCopyPlusIcon";
}
