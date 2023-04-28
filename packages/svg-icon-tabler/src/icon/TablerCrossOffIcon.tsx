import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCrossOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCrossOffIcon = React.forwardRef<SVGSVGElement, TablerCrossOffIconProps>(function TablerCrossOffIcon(
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
			<path d="M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCrossOffIcon.displayName = "TablerCrossOffIcon";
}
