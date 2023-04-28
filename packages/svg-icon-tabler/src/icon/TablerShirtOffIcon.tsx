import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShirtOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShirtOffIcon = React.forwardRef<SVGSVGElement, TablerShirtOffIconProps>(function TablerShirtOffIcon(
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
			<path d="M8.243 4.252l.757 -.252c0 .43 .09 .837 .252 1.206m1.395 1.472a3 3 0 0 0 4.353 -2.678l6 2v5h-3v3m0 4v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l2.26 -.753" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShirtOffIcon.displayName = "TablerShirtOffIcon";
}
