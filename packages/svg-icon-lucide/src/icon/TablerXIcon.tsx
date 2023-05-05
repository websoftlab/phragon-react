import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerXIcon = React.forwardRef<SVGSVGElement, TablerXIconProps>(function TablerXIcon(props, ref) {
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
			<path d="M18 6 L6 18" />
			<path d="M6 6 L18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerXIcon.displayName = "TablerXIcon";
}
