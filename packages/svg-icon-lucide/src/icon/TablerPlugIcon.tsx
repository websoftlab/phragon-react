import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlugIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlugIcon = React.forwardRef<SVGSVGElement, TablerPlugIconProps>(function TablerPlugIcon(props, ref) {
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
			<path d="M12 22v-5" />
			<path d="M9 7V2" />
			<path d="M15 7V2" />
			<path d="M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlugIcon.displayName = "TablerPlugIcon";
}
