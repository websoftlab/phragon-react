import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPizzaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPizzaIcon = React.forwardRef<SVGSVGElement, TablerPizzaIconProps>(function TablerPizzaIcon(
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
			<path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" />
			<path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" />
			<path d="M13 11.01v-.01" />
			<path d="M11 14v-.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPizzaIcon.displayName = "TablerPizzaIcon";
}
