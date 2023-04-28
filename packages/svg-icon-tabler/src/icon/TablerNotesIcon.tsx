import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNotesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNotesIcon = React.forwardRef<SVGSVGElement, TablerNotesIconProps>(function TablerNotesIcon(
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
			<path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
			<path d="M9 7l6 0" />
			<path d="M9 11l6 0" />
			<path d="M9 15l4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNotesIcon.displayName = "TablerNotesIcon";
}
