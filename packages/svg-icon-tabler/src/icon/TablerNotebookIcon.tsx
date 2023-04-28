import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNotebookIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNotebookIcon = React.forwardRef<SVGSVGElement, TablerNotebookIconProps>(function TablerNotebookIcon(
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
			<path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
			<path d="M13 8l2 0" />
			<path d="M13 12l2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNotebookIcon.displayName = "TablerNotebookIcon";
}
