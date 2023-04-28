import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCraneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCraneIcon = React.forwardRef<SVGSVGElement, TablerCraneIconProps>(function TablerCraneIcon(
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
			<path d="M9 21v-18l-6 6h18" />
			<path d="M9 3l10 6" />
			<path d="M17 9v4a2 2 0 1 1 -2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCraneIcon.displayName = "TablerCraneIcon";
}
