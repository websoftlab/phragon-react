import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBugIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBugIcon = React.forwardRef<SVGSVGElement, TablerBugIconProps>(function TablerBugIcon(props, ref) {
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
			<path d="M12 6 H12 A4 4 0 0 1 16 10 V16 A4 4 0 0 1 12 20 H12 A4 4 0 0 1 8 16 V10 A4 4 0 0 1 12 6 z" />
			<path d="m19 7-3 2" />
			<path d="m5 7 3 2" />
			<path d="m19 19-3-2" />
			<path d="m5 19 3-2" />
			<path d="M20 13h-4" />
			<path d="M4 13h4" />
			<path d="m10 4 1 2" />
			<path d="m14 4-1 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBugIcon.displayName = "TablerBugIcon";
}
