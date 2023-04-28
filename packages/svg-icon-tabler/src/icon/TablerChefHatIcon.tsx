import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChefHatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChefHatIcon = React.forwardRef<SVGSVGElement, TablerChefHatIconProps>(function TablerChefHatIcon(
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
			<path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" />
			<path d="M6.161 17.009l11.839 -.009" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerChefHatIcon.displayName = "TablerChefHatIcon";
}
