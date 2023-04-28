import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCraneOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCraneOffIcon = React.forwardRef<SVGSVGElement, TablerCraneOffIconProps>(function TablerCraneOffIcon(
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
			<path d="M6 21h6" />
			<path d="M9 21v-12" />
			<path d="M9 5v-2l-1 1" />
			<path d="M6 6l-3 3h6" />
			<path d="M13 9h8" />
			<path d="M9 3l10 6" />
			<path d="M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCraneOffIcon.displayName = "TablerCraneOffIcon";
}
