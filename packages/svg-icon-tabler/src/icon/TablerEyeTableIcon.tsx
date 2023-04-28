import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEyeTableIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEyeTableIcon = React.forwardRef<SVGSVGElement, TablerEyeTableIconProps>(function TablerEyeTableIcon(
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
			<path d="M8 18h-.011" />
			<path d="M12 18h-.011" />
			<path d="M16 18h-.011" />
			<path d="M4 3h16" />
			<path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" />
			<path d="M14 7h-4" />
			<path d="M9 15h1" />
			<path d="M14 15h1" />
			<path d="M12 11v-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEyeTableIcon.displayName = "TablerEyeTableIcon";
}
