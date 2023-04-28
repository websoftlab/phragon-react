import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileOffIcon = React.forwardRef<SVGSVGElement, TablerFileOffIconProps>(function TablerFileOffIcon(
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
			<path d="M3 3l18 18" />
			<path d="M7 3h7l5 5v7m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileOffIcon.displayName = "TablerFileOffIcon";
}
