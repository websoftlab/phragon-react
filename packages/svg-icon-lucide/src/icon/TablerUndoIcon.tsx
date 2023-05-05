import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUndoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUndoIcon = React.forwardRef<SVGSVGElement, TablerUndoIconProps>(function TablerUndoIcon(props, ref) {
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
			<path d="M3 7v6h6" />
			<path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUndoIcon.displayName = "TablerUndoIcon";
}
