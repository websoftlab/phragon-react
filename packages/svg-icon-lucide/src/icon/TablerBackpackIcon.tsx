import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBackpackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBackpackIcon = React.forwardRef<SVGSVGElement, TablerBackpackIconProps>(function TablerBackpackIcon(
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
			<path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
			<path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
			<path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
			<path d="M8 10h8" />
			<path d="M8 18h8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBackpackIcon.displayName = "TablerBackpackIcon";
}
