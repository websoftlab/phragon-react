import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZapIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZapIcon = React.forwardRef<SVGSVGElement, TablerZapIconProps>(function TablerZapIcon(props, ref) {
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
			<path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerZapIcon.displayName = "TablerZapIcon";
}
