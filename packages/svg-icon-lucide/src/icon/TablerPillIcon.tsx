import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPillIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPillIcon = React.forwardRef<SVGSVGElement, TablerPillIconProps>(function TablerPillIcon(props, ref) {
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
			<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
			<path d="m8.5 8.5 7 7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPillIcon.displayName = "TablerPillIcon";
}
