import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRuler3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRuler3Icon = React.forwardRef<SVGSVGElement, TablerRuler3IconProps>(function TablerRuler3Icon(
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
			<path d="M19.875 8c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z" />
			<path d="M9 8v2" />
			<path d="M6 8v3" />
			<path d="M12 8v3" />
			<path d="M18 8v3" />
			<path d="M15 8v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRuler3Icon.displayName = "TablerRuler3Icon";
}
