import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZzzIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZzzIcon = React.forwardRef<SVGSVGElement, TablerZzzIconProps>(function TablerZzzIcon(props, ref) {
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
			<path d="M4 12h6l-6 8h6" />
			<path d="M14 4h6l-6 8h6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerZzzIcon.displayName = "TablerZzzIcon";
}
