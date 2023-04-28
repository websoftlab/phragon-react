import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurlingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurlingIcon = React.forwardRef<SVGSVGElement, TablerCurlingIconProps>(function TablerCurlingIcon(
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
			<path d="M4 9m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v2a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
			<path d="M4 14h16" />
			<path d="M8 5h6a2 2 0 0 1 2 2v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCurlingIcon.displayName = "TablerCurlingIcon";
}
