import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoldOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoldOffIcon = React.forwardRef<SVGSVGElement, TablerBoldOffIconProps>(function TablerBoldOffIcon(
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
			<path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5" />
			<path d="M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBoldOffIcon.displayName = "TablerBoldOffIcon";
}
