import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDnaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDnaIcon = React.forwardRef<SVGSVGElement, TablerDnaIconProps>(function TablerDnaIcon(props, ref) {
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
			<path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
			<path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
			<path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDnaIcon.displayName = "TablerDnaIcon";
}
