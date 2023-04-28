import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNotesOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNotesOffIcon = React.forwardRef<SVGSVGElement, TablerNotesOffIconProps>(function TablerNotesOffIcon(
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
			<path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
			<path d="M11 7h4" />
			<path d="M9 11h2" />
			<path d="M9 15h4" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNotesOffIcon.displayName = "TablerNotesOffIcon";
}
